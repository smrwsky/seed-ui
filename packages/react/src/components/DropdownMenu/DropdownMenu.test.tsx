import {
  axe,
  render,
  screen,
  userEvent,
  waitFor,
} from '../../utils/test-utils';

import DropdownMenu from './DropdownMenu';

describe('DropdownMenu', () => {
  describe('Given a DropdownMenu component with valid DropdownMenu.Trigger and DropdownMenu.Content components', () => {
    describe('When interacting with the DropdownMenu.Trigger component', () => {
      it('Then the menu component should be displayed', async () => {
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        const button = screen.getByRole('button');
        await userEvent.click(button);

        await waitFor(() => {
          expect(screen.getByText('Delete')).toBeVisible();
        });
      });
    });

    describe('When popover is open and user click outside the popover content', () => {
      it('Then the menu component should be hidden', async () => {
        render(
          <>
            <button>Outside</button>
            <DropdownMenu>
              <DropdownMenu.Trigger>
                <button>Trigger</button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Delete')).toBeVisible();
        });

        await userEvent.click(screen.getByText('Outside'));

        await waitFor(() => {
          expect(screen.queryByText('Delete')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('Given DropdownMenu component is rendered with valid DropdownMenu.Item children', () => {
    describe('When user clicks on a menu item', () => {
      it('Then the associated action should be triggered, the menu should be hidden, and the trigger should be focused', async () => {
        const onClick = jest.fn();

        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={onClick}>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Delete')).toBeVisible();
        });

        await userEvent.click(screen.getByText('Delete'));

        await waitFor(() => {
          expect(onClick).toHaveBeenCalledTimes(1);
          expect(screen.queryByText('Delete')).not.toBeInTheDocument();
          expect(screen.getByText('Trigger')).toHaveFocus();
        });
      });
    });

    describe('When the user navigates through the menu items using keyboard arrow keys (up/down)', () => {
      it('Then the correct menu item should be focused', async () => {
        // Render the DropdownMenu component with multiple menu items
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });
      });
    });

    describe('When user presses Enter or Space key on the menu item', () => {
      it('Then the associated action should be triggered, the menu should be hidden and the trigger should be focused', async () => {
        const mockAction = jest.fn();

        // Render the DropdownMenu component with a mock menu item
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={mockAction}>Edit</DropdownMenu.Item>
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        // Simulate keydown events
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{ }');

        // Assert that the associated action was triggered
        expect(mockAction).toHaveBeenCalledTimes(2);

        await waitFor(() => {
          expect(screen.queryByText('Edit')).not.toBeInTheDocument();
          expect(screen.getByText('Trigger')).toHaveFocus();
        });
      });
    });

    describe('When the menu component is accessed using a screen reader', () => {
      it('Then the menu should be accessible to screen readers, providing proper instructions and announcing menu items', async () => {
        // Render the DropdownMenu component with multiple menu items
        const { container } = render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        // Perform accessibility audit
        const results = await axe(container);
        // Assert no accessibility violations
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Given DropdownMenu component is rendered with valid DropdownMenu.Item and DropdownMenu.Submenu children', () => {
    describe('When the user clicks on a menu item with a submenu', () => {
      it('Then the submenu should be expanded or collapsed, depending on its current state', async () => {
        // Render the VerticalDropdownMenu component with menu items and submenus
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Share')).toBeVisible();
        });

        await userEvent.click(screen.getByText('Share'));

        await waitFor(() => {
          expect(screen.queryByText('Facebook')).toBeVisible();
          expect(screen.queryByText('Twitter')).toBeVisible();
          expect(screen.queryByText('LinkedIn')).toBeVisible();
        });
      });
    });

    describe('When the user clicks on a submenu item', () => {
      it('Then the associated action should be triggered, the menu should be hidden, and the trigger should be focused', async () => {
        const mockAction = jest.fn();

        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item onClick={mockAction}>
                  Facebook
                </DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Share')).toBeVisible();
        });

        await userEvent.click(screen.getByText('Share'));

        await waitFor(() => {
          expect(screen.queryByText('Facebook')).toBeVisible();
        });

        await userEvent.click(screen.getByText('Facebook'));
        expect(mockAction).toHaveBeenCalledTimes(1);

        await waitFor(() => {
          expect(screen.queryByText('Edit')).not.toBeInTheDocument();
          expect(screen.queryByText('Facebook')).not.toBeInTheDocument();
          expect(screen.queryByText('Trigger')).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with the menu item with a submenu using keyboard enter key', () => {
      it('Then the submenu should be expanded and the first item should be focused', async () => {
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{enter}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Facebook' }),
          ).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with the menu item with a submenu using keyboard space key', () => {
      it('Then the submenu should be expanded and the first item should be focused', async () => {
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{ }');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Facebook' }),
          ).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with the menu item with a submenu using keyboard arrowright key', () => {
      it('Then the submenu should be expanded and the first item should be focused', async () => {
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Facebook' }),
          ).toHaveFocus();
        });
      });
    });

    describe('When the user navigates through the submenu items using keyboard arrow keys (up/down)', () => {
      it('Then the correct submenu item should be focused', async () => {
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Facebook' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Twitter' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'LinkedIn' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Twitter' }),
          ).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with the menu item with a submenu using keyboard escape key', () => {
      it('Then the submenu should be hidden', async () => {
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.queryByText('Facebook')).toBeVisible();
        });

        await userEvent.keyboard('{escape}');

        await waitFor(() => {
          expect(screen.queryByText('Facebook')).not.toBeInTheDocument();
        });
      });
    });

    describe('When the user navigates through the 1-st level submenu items using keyboard arrowleft key', () => {
      it('Then the submenu should be collapsed and the correct parent item should be focused', async () => {
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Facebook' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowleft}');

        await waitFor(() => {
          expect(screen.queryByText('Facebook')).not.toBeInTheDocument();
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with submenu items using Space or Enter key', () => {
      it('Then the associated action should be triggered, the menu should be hidden, and the trigger should be focused', async () => {
        const mockAction = jest.fn();

        // Render the DropdownMenu component with menu items and submenus
        render(
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <button>Trigger</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Submenu label="Share">
                <DropdownMenu.Item onClick={mockAction}>
                  Facebook
                </DropdownMenu.Item>
                <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                <DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
              </DropdownMenu.Submenu>
              <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Edit')).toBeVisible();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Edit' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(
            screen.queryByRole('menuitem', { name: 'Share' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(
            screen.getByRole('menuitem', { name: 'Facebook' }),
          ).toHaveFocus();
        });

        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{ }');

        expect(mockAction).toHaveBeenCalledTimes(2);

        await waitFor(() => {
          expect(screen.queryByText('Facebook')).not.toBeInTheDocument();
          expect(screen.queryByText('Edit')).not.toBeInTheDocument();
          expect(screen.queryByText('Trigger')).toHaveFocus();
        });
      });
    });
  });
});

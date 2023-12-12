import {
  axe,
  render,
  screen,
  userEvent,
  waitFor,
} from '../../utils/test-utils';

import MenuBar from './MenuBar';

describe('MenuBar', () => {
  describe('Given MenuBar component is rendered with valid MenuBar.Item children', () => {
    describe('When user clicks on a menu item', () => {
      it('Then the associated action should be triggered', async () => {
        const onClick = jest.fn();

        render(
          <MenuBar>
            <MenuBar.Item onClick={onClick}>MenuBar Item</MenuBar.Item>
          </MenuBar>,
        );

        await userEvent.click(screen.getByText('MenuBar Item'));

        await waitFor(() => {
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('When the user navigates through the menu items using keyboard arrow keys (left/right)', () => {
      it('Then the correct menu item should be focused', async () => {
        // Render the MenuBar component with multiple menu items
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Item>Products</MenuBar.Item>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Get the menu items
        const homeMenuBar = screen.getAllByRole('menuitem')[0];
        const productsMenuBar = screen.getAllByRole('menuitem')[1];

        // Simulate keyboard navigation
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert focus on the correct menu item
          expect(homeMenuBar).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(productsMenuBar).toHaveFocus();
        });

        await userEvent.keyboard('{arrowleft}');

        await waitFor(() => {
          expect(homeMenuBar).toHaveFocus();
        });
      });
    });

    describe('When user presses Enter or Space key on the menu item', () => {
      it('Then the associated action should be triggered', async () => {
        const mockAction = jest.fn();

        // Render the MenuBar component with a mock menu item
        render(
          <MenuBar>
            <MenuBar.Item onClick={mockAction}>Click Me</MenuBar.Item>
          </MenuBar>,
        );

        const menuItem = screen.getByRole('menuitem');

        // Get the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(menuItem).toHaveFocus();
        });

        // Simulate keydown events
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{ }');

        // Assert that the associated action was triggered
        expect(mockAction).toHaveBeenCalledTimes(2);
      });
    });

    describe('When the menu component is accessed using a screen reader', () => {
      it('Then the menu should be accessible to screen readers, providing proper instructions and announcing menu items', async () => {
        // Render the MenuBar component with multiple menu items
        const { container } = render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Item>Products</MenuBar.Item>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Perform accessibility audit
        const results = await axe(container);
        // Assert no accessibility violations
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Given MenuBar component is rendered with valid MenuBar.Item and MenuBar.Submenu children', () => {
    describe('When the user clicks on a menu item with a submenu', () => {
      it('Then the submenu should be expanded or collapsed, depending on its current state', async () => {
        // Render the VerticalMenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Assert that the submenu items are not visible initially
        expect(screen.getAllByRole('menuitem')).toHaveLength(3);
        // Simulate a click on the menu item with the fly-out submenu
        await userEvent.click(screen.getAllByRole('menuitem')[1]);

        await waitFor(() => {
          // Assert that the submenu items are visible after clicking
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });
      });
    });

    describe('When the user clicks on a submenu item', () => {
      it('Then the associated action should be triggered and the submenu should be collapsed', async () => {
        // Mock function
        const mockAction = jest.fn();

        // Render the MenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item onClick={mockAction}>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate a click on a submenu item
        await userEvent.click(screen.getByText('Products'));

        await waitFor(() => {
          // Assert that the submenu is visible after hovering
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });

        await userEvent.click(screen.getByText('Clothing'));

        await waitFor(() => {
          // Assert that the associated action has been triggered
          expect(mockAction).toHaveBeenCalledTimes(1);
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
        });
      });
    });

    describe('When the user interacts with the menu item with a submenu using keyboard enter key', () => {
      it('Then the submenu should be expanded', async () => {
        // Render the VerticalMenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{enter}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });
      });
    });

    describe('When the user interacts with the menu item with a submenu using keyboard space key', () => {
      it('Then the submenu should be expanded', async () => {
        // Render the VerticalMenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{ }');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });
      });
    });

    describe('When the user interacts with the menu item with a submenu using keyboard escape key', () => {
      it('Then the submenu should be collapsed', async () => {
        // Render the VerticalMenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });

        await userEvent.keyboard('{escape}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
        });
      });
    });

    describe('When the user navigates through the submenu items using keyboard arrow keys (up/down)', () => {
      it('Then the correct submenu item should be focused', async () => {
        // Render the MenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[4]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });
      });
    });

    describe('When the user navigates through the submenu items using keyboard arrowup key', () => {
      it('Then the last submenu item should be focused', async () => {
        // Render the MenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[5]).toHaveFocus();
        });
      });
    });

    describe('When the user navigates through the 1-st level submenu items using keyboard arrowleft key', () => {
      it('Then the submenu should be collapsed and the previous parent item should be focused', async () => {
        // Render the MenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowleft}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });
      });
    });

    describe('When the user navigates through the 1-st level submenu items using keyboard arrowright key', () => {
      it('Then the submenu should be collapsed and the next parent item should be focused', async () => {
        // Render the MenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with the submenu item that also has submenu using keyboard arrowright key', () => {
      it('Then the 2-nd level submenu should be expanded', async () => {
        // Render the MenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Submenu label="Electronics">
                <MenuBar.Item>Mobile Phones</MenuBar.Item>
                <MenuBar.Item>Computers</MenuBar.Item>
                <MenuBar.Item>TV</MenuBar.Item>
              </MenuBar.Submenu>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[4]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(9);
          expect(screen.getAllByRole('menuitem')[6]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');
      });
    });

    describe('When the user interacts with submenu items using Space or Enter key', () => {
      it('Then the associated action should be triggered and the submenu should be collapsed', async () => {
        const mockAction = jest.fn();

        // Render the MenuBar component with menu items and submenus
        render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item onClick={mockAction}>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });

        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{ }');

        await waitFor(() => {
          // Assert that the associated action is triggered
          expect(mockAction).toHaveBeenCalledTimes(2);
          // Assert that the submenu is collapsed
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
        });
      });
    });

    describe('When the menu component is accessed using a screen reader', () => {
      it('Then the menu should be accessible to screen readers, providing proper instructions and announcing menu items', async () => {
        // Render the MenuBar component with multiple menu items
        const { container } = render(
          <MenuBar>
            <MenuBar.Item>Home</MenuBar.Item>
            <MenuBar.Submenu label="Products">
              <MenuBar.Item>Electronics</MenuBar.Item>
              <MenuBar.Item>Clothing</MenuBar.Item>
              <MenuBar.Item>Accessories</MenuBar.Item>
            </MenuBar.Submenu>
            <MenuBar.Item>Contacts</MenuBar.Item>
          </MenuBar>,
        );

        // Perform accessibility audit
        const results = await axe(container);
        // Assert no accessibility violations
        expect(results).toHaveNoViolations();
      });
    });
  });
});

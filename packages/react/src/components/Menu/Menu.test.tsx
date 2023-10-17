import {
  axe,
  render,
  screen,
  userEvent,
  waitFor,
} from '../../utils/test-utils';

import Menu from './Menu';
import { MenuItem } from './MenuItem';
import { Submenu } from './Submenu';

describe('Menu', () => {
  describe('Given Menu component is rendered with valid MenuItem children', () => {
    describe('When user clicks on a menu item', () => {
      it('Then the associated action should be triggered', async () => {
        const onClick = jest.fn();

        render(
          <Menu>
            <MenuItem label="Menu Item" onClick={onClick} />
          </Menu>,
        );

        await userEvent.click(screen.getByText('Menu Item'));

        await waitFor(() => {
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('When the user navigates through the menu items using keyboard arrow keys (up/down)', () => {
      it('Then the correct menu item should be focused', async () => {
        // Render the Menu component with multiple menu items
        render(
          <Menu>
            <MenuItem label="Home" />
            <MenuItem label="Products" />
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Get the menu items
        const homeMenuItem = screen.getAllByRole('menuitem')[0];
        const productsMenuItem = screen.getAllByRole('menuitem')[1];

        // Simulate keyboard navigation
        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          // Assert focus on the correct menu item
          expect(homeMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(productsMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');

        await waitFor(() => {
          expect(homeMenuItem).toHaveFocus();
        });
      });
    });

    describe('When user presses Enter or Space key on the menu item', () => {
      it('Then the associated action should be triggered', async () => {
        const mockAction = jest.fn();

        // Render the Menu component with a mock menu item
        render(
          <Menu>
            <MenuItem label="Click Me" onClick={mockAction} />
          </Menu>,
        );

        const menuItem = screen.getByRole('menuitem');

        // Get the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

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
        // Render the Menu component with multiple menu items
        const { container } = render(
          <Menu>
            <MenuItem label="Home" />
            <MenuItem label="Products" />
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Perform accessibility audit
        const results = await axe(container);
        // Assert no accessibility violations
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Given Menu component is rendered with valid MenuItem and Submenu children', () => {
    describe('When the user hovers the mouse over a menu item with a fly-out submenu', () => {
      it('Then the menu should visually indicate which top-level menu items have a fly-out submenu and expand the submenu visually', async () => {
        // Render the VerticalMenu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Assert that the submenu items are not visible initially
        expect(screen.getAllByRole('menuitem')).toHaveLength(3);
        // Simulate mouse hover on the menu item with fly-out submenu
        await userEvent.hover(screen.getAllByRole('menuitem')[1]);

        await waitFor(() => {
          const updatedMenuItems = screen.getAllByRole('menuitem');
          // Assert that the submenu items are visible after hovering
          expect(updatedMenuItems).toHaveLength(6);
        });
      });
    });

    describe('When the user clicks on a menu item with a fly-out submenu', () => {
      it('Then the fly-out submenu should be expanded or collapsed, depending on its current state', async () => {
        // Render the VerticalMenu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
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
      it('Then the associated action should be triggered', async () => {
        // Mock function
        const mockAction = jest.fn();

        // Render the Menu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" onClick={mockAction} />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Simulate a click on a submenu item
        await userEvent.click(screen.getAllByRole('menuitem')[1]);

        await waitFor(() => {
          // Assert that the submenu is visible after hovering
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });

        const updatedMenuItems = screen.getAllByRole('menuitem');

        await userEvent.click(updatedMenuItems[3]);
        // Assert that the associated action has been triggered
        expect(mockAction).toHaveBeenCalledTimes(1);
      });
    });

    describe('When the user interacts with a menu item with a fly-out submenu with ArrowRight', () => {
      it('Then the submenu should be expanded and the first submenu item should be focused', async () => {
        // Render the Menu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Assert that the submenu is not visible initially
        expect(screen.getAllByRole('menuitem')).toHaveLength(3);

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert that the submenu is expanded and the first submenu item is focused
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });
      });
    });

    describe('When the user navigates through the submenu items using keyboard arrow keys (up/down)', () => {
      it('The correct submenu item should be focused', async () => {
        // Render the Menu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
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

    describe('When the user interacts with submenu items using Space or Enter key', () => {
      it('Then the associated action should be triggered', async () => {
        const mockAction = jest.fn();

        // Render the Menu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" onClick={mockAction} />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });

        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{ }');

        expect(mockAction).toHaveBeenCalledTimes(2);
        mockAction.mockClear();
      });
    });

    describe('When the user interacts with submenu items using ArrowLeft or Esc key', () => {
      it('Then the submenu should be closed and the focus should be returned to the parent top-level menuitem', async () => {
        // Render the Menu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowleft}');

        await waitFor(() => {
          // Assert that the submenu is collapsed and the focus is returned to the parent top-level menuitem
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });

        await userEvent.keyboard('{escape}');

        await waitFor(() => {
          // Assert that the submenu is collapsed and the focus is returned to the parent top-level menuitem
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with a menu item with a fly-out submenu with Enter or Space key', () => {
      it('Then the submenu should be expanded and the first submenu item should be focused', async () => {
        // Render the Menu component with menu items and submenus
        render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Assert that the submenu is not visible initially
        expect(screen.getAllByRole('menuitem')).toHaveLength(3);

        // Simulate keyboard navigation to focus on the menu item
        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{enter}');

        await waitFor(() => {
          // Assert that the submenu is expanded and the first submenu item is focused
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });

        // Go back to the parent menu item
        await userEvent.keyboard('{arrowleft}');

        await waitFor(() => {
          // Assert that the submenu items are not visible after selecting the menu item
          expect(screen.getAllByRole('menuitem')).toHaveLength(3);
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{ }');

        await waitFor(() => {
          // Assert that the submenu is expanded and the first submenu item is focused
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });
      });
    });

    describe('When the menu component is accessed using a screen reader', () => {
      it('Then the menu should be accessible to screen readers, providing proper instructions and announcing menu items', async () => {
        // Render the Menu component with multiple menu items
        const { container } = render(
          <Menu>
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Perform accessibility audit
        const results = await axe(container);
        // Assert no accessibility violations
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Given Menu component is rendered with mode "horizontal" and valid MenuItem children', () => {
    describe('When the user navigates through the menu items using keyboard arrow keys (up/down)', () => {
      it('Then the correct menu item should be focused', async () => {
        // Render the Menu component with multiple menu items
        render(
          <Menu type="horizontal">
            <MenuItem label="Home" />
            <MenuItem label="Products" />
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Get the menu items
        const homeMenuItem = screen.getAllByRole('menuitem')[0];
        const aboutMenuItem = screen.getAllByRole('menuitem')[1];

        // Simulate keyboard navigation
        await userEvent.tab();
        await userEvent.keyboard('{arrowright}');

        // Assert focus on the correct menu item
        await waitFor(() => {
          expect(homeMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowright}');

        await waitFor(() => {
          expect(aboutMenuItem).toHaveFocus();
        });

        // Simulate keyboard navigation in the opposite direction
        await userEvent.keyboard('{arrowleft}');

        // Assert focus on the correct menu item
        await waitFor(() => {
          expect(homeMenuItem).toHaveFocus();
        });
      });
    });

    describe('When the menu component is accessed using a screen reader', () => {
      it('Then the menu should be accessible to screen readers, providing proper instructions and announcing menu items', async () => {
        // Render the Menu component with multiple menu items
        const { container } = render(
          <Menu type="horizontal">
            <MenuItem label="Home" />
            <MenuItem label="Products" />
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Perform accessibility audit
        const results = await axe(container);
        // Assert no accessibility violations
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Given Menu component is rendered with mode "horizontal" and valid MenuItem and Submenu children', () => {
    describe('When the user interacts with a menu item with a fly-out submenu with ArrowDown key', () => {
      it('Then the submenu should be expanded and the first submenu item should be focused', async () => {
        // Render the Menu component with menu items and submenus
        render(
          <Menu type="horizontal">
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Assert that the submenu is not visible initially
        expect(screen.getAllByRole('menuitem')).toHaveLength(3);

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
          // Assert that the submenu is expanded and the first submenu item is focused
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });
      });
    });

    describe('When the menu component is accessed using a screen reader', () => {
      it('Then the menu should be accessible to screen readers, providing proper instructions and announcing menu items', async () => {
        // Render the Menu component with multiple menu items
        const { container } = render(
          <Menu type="horizontal">
            <MenuItem label="Home" />
            <MenuItem label="Products" />
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Perform accessibility audit
        const results = await axe(container);
        // Assert no accessibility violations
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Given Menu component is rendered with mode "inline" and valid MenuItem and Submenu children', () => {
    describe('When the user interacts with the expanded submenu using keyboard navigation (up/down) keys', () => {
      it('Then the next or previous submenu item should be focused', async () => {
        // Render the Menu component with menu items and submenus
        render(
          <Menu type="inline">
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
        });

        await userEvent.keyboard('{ }');

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });

        // Simulate keyboard navigation to focus on the first submenu item
        await userEvent.keyboard('{arrowdown}');

        await waitFor(() => {
          // Assert that the first submenu item is focused
          expect(screen.getAllByRole('menuitem')[3]).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');

        await waitFor(() => {
          // Assert that the first submenu item is focused
          expect(screen.getAllByRole('menuitem')[2]).toHaveFocus();
        });
      });
    });

    describe('When the user interacts with the expanded submenu using keyboard navigation (up/down) keys to access next and previous top-level items', () => {
      it('Then the previous parent item should be focused', async () => {
        // Render the Menu component with menu items and submenus
        render(
          <Menu type="inline">
            <MenuItem label="Home" />
            <Submenu label="Products">
              <MenuItem label="Electronics" />
              <MenuItem label="Clothing" />
              <MenuItem label="Accessories" />
            </Submenu>
            <MenuItem label="Contacts" />
          </Menu>,
        );

        // Simulate a click on a submenu item
        await userEvent.click(screen.getAllByRole('menuitem')[1]);

        await waitFor(() => {
          // Assert that the submenu is expanded
          expect(screen.getAllByRole('menuitem')).toHaveLength(6);
        });

        const updatedMenuItems = screen.getAllByRole('menuitem');

        // Simulate keyboard navigation to focus on the next top-level menu item
        await userEvent.keyboard(
          '{arrowdown}{arrowdown}{arrowdown}{arrowdown}',
        );

        await waitFor(() => {
          // Assert that the first submenu item is focused
          expect(updatedMenuItems[5]).toHaveFocus();
        });

        // Simulate keyboard navigation to focus previous top-level menu item
        await userEvent.keyboard('{arrowup}{arrowup}{arrowup}{arrowup}');

        await waitFor(() => {
          // Assert that the parent menu item is focused
          expect(updatedMenuItems[1]).toHaveFocus();
        });
      });
    });
  });
});

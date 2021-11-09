import React from 'react';
import { Col, Container, Row } from '@seed-ui/layout';
import { border, borderRadius, boxShadow, theme } from '@seed-ui/styles';

import { Text } from '../Text';

import Box, { BoxProps } from './Box';
import docs from './Box.docs.mdx';

const boxShadows = Object.keys(boxShadow) as Array<keyof typeof boxShadow>;

const borders = Object.keys(border) as Array<keyof typeof border>;

const colors = Object.keys(theme.color) as Array<keyof typeof theme.color>;

const borderRadiuses = Object.keys(borderRadius) as Array<
  keyof typeof borderRadius
>;

export default {
  title: 'Elements/Box',
  component: Box,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'as': {
      table: {
        type: {
          summary: 'ElementType',
        },
        defaultValue: { summary: 'button' },
      },
    },
    'border': {
      type: 'select',
      options: borders,
      table: {
        type: {
          summary: borders.join(' | '),
        },
      },
    },
    'borderBottom': {
      type: 'select',
      options: borders,
      table: {
        type: {
          summary: borders.join(' | '),
        },
      },
    },
    'borderLeft': {
      type: 'select',
      options: borders,
      table: {
        type: {
          summary: borders.join(' | '),
        },
      },
    },
    'borderRight': {
      type: 'select',
      options: borders,
      table: {
        type: {
          summary: borders.join(' | '),
        },
      },
    },
    'borderTop': {
      type: 'select',
      options: borders,
      table: {
        type: {
          summary: borders.join(' | '),
        },
      },
    },
    'borderX': {
      type: 'select',
      options: borders,
      table: {
        type: {
          summary: borders.join(' | '),
        },
      },
    },
    'borderY': {
      type: 'select',
      options: borders,
      table: {
        type: {
          summary: borders.join(' | '),
        },
      },
    },
    'backgroundColor': {
      type: 'select',
      options: colors,
      table: {
        type: {
          summary: colors.join(' | '),
        },
      },
    },
    'borderColor': {
      type: 'select',
      options: colors,
      table: {
        type: {
          summary: colors.join(' | '),
        },
      },
    },
    'borderRadius': {
      type: 'select',
      options: borderRadiuses,
      table: {
        type: {
          summary: borderRadiuses.join(' | '),
        },
      },
    },
    'boxShadow': {
      type: 'select',
      options: boxShadows,
      table: {
        type: {
          summary: boxShadows.join(' | '),
        },
      },
    },
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export function Base(args: BoxProps): JSX.Element {
  return (
    <Box {...args}>
      <Container px={3}>Box content</Container>
    </Box>
  );
}

export function Colors(): JSX.Element {
  return (
    <Row gutter={2}>
      <Col>
        <Box border={1} borderColor="primary200">
          <Container p={3}>
            <Text variant="secondary">Border Color</Text>
          </Container>
        </Box>
      </Col>

      <Col>
        <Box backgroundColor="primary50">
          <Container p={3}>
            <Text variant="secondary">Background-Color</Text>
          </Container>
        </Box>
      </Col>
    </Row>
  );
}

export function Borders(): JSX.Element {
  return (
    <Row gutter={2}>
      <Col>
        <Box border={1} borderColor="primary200" backgroundColor="primary50">
          <Container p={3}>
            <Text variant="secondary">Border</Text>
          </Container>
        </Box>
      </Col>

      <Col>
        <Box borderY={1} borderColor="primary200" backgroundColor="primary50">
          <Container p={3}>
            <Text variant="secondary">Border-Y</Text>
          </Container>
        </Box>
      </Col>

      <Col>
        <Box borderTop={1} borderColor="primary200" backgroundColor="primary50">
          <Container p={3}>
            <Text variant="secondary">Border-Top</Text>
          </Container>
        </Box>
      </Col>
    </Row>
  );
}

export function BorderRadiuses(): JSX.Element {
  return (
    <Row gutter={2}>
      {borderRadiuses.map((v) => (
        <Col key={v}>
          <Box
            borderRadius={v}
            border={1}
            borderColor="primary200"
            backgroundColor="primary50"
          >
            <Container p={3}>
              <Text variant="secondary">Border-Radius: {v}</Text>
            </Container>
          </Box>
        </Col>
      ))}
    </Row>
  );
}

export function BoxShadows(): JSX.Element {
  return (
    <Row gutter={2}>
      {boxShadows.map((v) => (
        <Col key={v}>
          <Box boxShadow={v}>
            <Container p={3}>
              <Text variant="secondary">Box-Shadow: {v}</Text>
            </Container>
          </Box>
        </Col>
      ))}
    </Row>
  );
}

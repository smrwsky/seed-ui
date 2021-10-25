const path = require('path');
const fs = require('fs');

const { stripIndents } = require('common-tags');
const glob = require('glob');
const {
    upperFirst,
    camelCase,
    kebabCase,
} = require('lodash');
const rimraf = require('rimraf')

const comment = `
  // This file is auto-generated using the 'generate-icon-exports.js' script
  // so any changes made to this file manually will be lost the next time the
  // script is executed
`;

const rootDir = path.join(__dirname, '../src');
const componentsDir = path.join(rootDir, '/components');
const iconFileExt = '.react.svg';
const assets = path.join(rootDir, '/assets/icons/*' + iconFileExt);

const formatComponentNames = (fileNames) =>
    fileNames.map((fileName) =>
        upperFirst(camelCase(path.basename(fileName, iconFileExt))),
    );

const generateComponentFile = (componentName) => {
    const script = stripIndents`
    ${comment}

    import React from 'react';
    import cx from 'classnames';

    import ${componentName}Svg from '../../assets/icons/${kebabCase(
        componentName,
    )}${iconFileExt}'
    import {
      iconStyle,
      iconFlipStyle,
      iconSpinStyle,
      svgStyle,
    } from '../../styles/helpers';

    export interface ${componentName}IconProps extends React.ImgHTMLAttributes<HTMLElement> {
      flip?: boolean;
      spin?: boolean;
    }

    function ${componentName}Icon ({
      flip = false,
      spin = false,
      className,
      ...elemProps
    }: ${componentName}IconProps, ref: React.Ref<HTMLElement>): JSX.Element {
        
      return (
        <span
          {...elemProps}
          ref={ref}
          className={cx(
            iconStyle,
            flip && iconFlipStyle,
            spin && iconSpinStyle,
            className
          )}
        >
          <${componentName}Svg aria-hidden className={svgStyle} />
        </span>
      )
    }  

    ${componentName}Icon.displayName = '${componentName}Icon';

    export default React.forwardRef(${componentName}Icon);
  `;

    const _path = path.join(
        componentsDir,
        `${componentName}Icon`,
        `${componentName}Icon.tsx`,
    );

    fs.writeFileSync(_path, script);
};

const generateExportFile = (componentName) => {
    const script = stripIndents`
    ${comment}

    export * from './${componentName}Icon';
    export { default as ${componentName}Icon } from './${componentName}Icon';
  `;

    const _path = path.join(componentsDir, `${componentName}Icon`, 'index.ts');
    fs.writeFileSync(_path, script);
};

const generateComponentFiles = (componentNames) => {
    componentNames.forEach((componentName) => {
        const dir = path.join(componentsDir, `${componentName}Icon`);

        rimraf.sync(dir);
        fs.mkdirSync(dir);

        generateComponentFile(componentName);
        generateExportFile(componentName);
    });
};

const generateIndexFile = componentNames => {
  const script = stripIndents`
    ${comment}

    ${componentNames
      .map(
        componentName => `
        export * from './components/${componentName}Icon';
      `
      )
      .join('')}
  `;

  const _path = path.join(rootDir, `index.ts`);
  fs.writeFileSync(_path, script);
};

const generateIndexStoryFile = componentNames => {
  const script = stripIndents`
    ${comment}

    import { Box, Col, Container, Row, Space, Title, Caption } from '@seed-ui/elements';
    import React from 'react';
    
    ${componentNames
      .map(
          (componentName) =>
              `import { ${componentName}Icon } from './components/${componentName}Icon';`,
      )
      .join('')}
    
    import docs from './index.docs.mdx';
    
    interface IconsComponentProps extends React.ImgHTMLAttributes<HTMLElement> {
      flip?: boolean;
      spin?: boolean;
    }
    
        
    function IconsComponent (props: IconsComponentProps): JSX.Element {
      return <Row gutter={2}>
        ${componentNames
        .map(
          (componentName) => `
            <Col width="auto">
              <Box borderRadius="sm" boxShadow="md" backgroundColor="white" borderColor="neutral100">
                <Container py={3} px={1} style={{ width: '96px' }} >
                  <Space gutter={2} direction="column" align="center">
                    <Title size="sm">
                      <${componentName}Icon {...props} role="img" alt="${componentName}" title="${componentName}" />
                    </Title>
                    
                    <Caption
                      nowrap
                      variant="secondary"
                    >
                      ${componentName}Icon
                    </Caption>
                  </Space>
                </Container>
              </Box>
            </Col>
          `,
        )
        .join('')}
      </Row>
    };
    
    export default {
      title: 'Overview/Icons',
      component: IconsComponent,
      parameters: {
        docs: { page: docs },
      },
      argTypes: {
        'flip': {
          control: 'boolean',  
          table: {
            type: {
              summary: 'boolean',
            },
            defaultValue: { summary: 'false' },
          },
        },
        'spin': {
          control: 'boolean',  
          table: {
            type: {
              summary: 'boolean',
            },
            defaultValue: { summary: 'false' },
          },
        },
        '[Element props]': {
          table: {
            type: {
              summary: 'HTMLAttributes',
            },
          },
        },
      },
    };
        
    export function Icons(args: IconsComponentProps): JSX.Element {
      return <IconsComponent {...args} />
    };
  `;

  const _path = path.join(rootDir, `index.stories.tsx`);
  fs.writeFileSync(_path, script);
};

const generateIndexDocsFile = () => {
  const script = stripIndents`
    import { Props, Story } from '../../../.storybook/components';

    # Seed UI Icons

    <Story id="overview-icons--icons" />
    <Props />
  `;

  const _path = path.join(rootDir, `index.docs.mdx`);
  fs.writeFileSync(_path, script);
};

glob(assets, (err, files) => {
    const componentNames = formatComponentNames(files);
    generateComponentFiles(componentNames);
    generateIndexFile(componentNames);
    generateIndexStoryFile(componentNames);
    generateIndexDocsFile();
});

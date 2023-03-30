export type PropertiesFragment = {
  [key: string]: PropertiesFragment | string;
};

export function setCssProperties<T extends PropertiesFragment>(
  vars: T,
  themeFragment: T,
) {
  Object.keys(vars).forEach((key) => {
    const propVal = vars[key];
    const themeVal = themeFragment[key];

    if (typeof propVal === 'string' && typeof themeVal === 'string') {
      document.documentElement.style.setProperty(propVal, themeVal);
    }

    if (typeof propVal !== 'string' && typeof themeVal !== 'string') {
      setCssProperties(propVal, themeVal);
    }
  });
}

export function removeCssProperties(vars: PropertiesFragment) {
  Object.keys(vars).forEach((key) => {
    const propVal = vars[key];

    if (typeof propVal === 'string') {
      document.documentElement.style.removeProperty(propVal);
    } else {
      removeCssProperties(propVal);
    }
  });
}

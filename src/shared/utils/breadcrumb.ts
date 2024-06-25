export interface BCItemData {
    name: string;
    path: string;
  }
  
  export const IgnoreWords = {
    words: ['home', 'users'],
  };
  
  export const BCWords: { [key: string]: string } = {
    home: 'Home',
    users: 'Users',
    'healthcare-workers': 'Healthcare Workers',
    messages: 'Messages',
    profile: 'Profile',
  };
  
  export const getBCWords = (key: string) => {
    return BCWords[key];
  };
  
  export const convertArrayItems = (array: BCItemData[]) => {
    return array.map((item) => {
      if (getBCWords(item.name)) {
        item.name = getBCWords(item.name);
      }
      return item;
    });
  };
  
  export const removeIgnoredWords = (arr: BCItemData[]) => {
    return arr.filter((w) => !IgnoreWords.words.includes(w.name));
  };
  
  export const getStringWidth = (text: string): number => {
    // Create a temporary canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    if (!context) {
      throw new Error('Unable to get canvas context');
    }
  
    // Set the font size and font family
    context.font = '16px Inter, serif';
  
    // Measure the text width
    const metrics = context.measureText(text);
    return metrics.width;
  };
  
  export const getPath = (path: string, segment: string) => {
    const segments = path.split('/');
  
    // Find the index of the segment
    const index = segments.indexOf(segment);
  
    if (index !== -1) {
      return segments.slice(0, index + 1).join('/');
    } else {
      return path;
    }
  };
  
  export const getBreadcrumbItems = (path: string, containerWidth: number) => {
    // Function to parse the pathname into a stack
    const parsePathname = (pathname: string) => {
      const pathSegments = pathname.split('/').filter((segment) => segment.length > 0);
      return [...pathSegments];
    };
  
    const pathNames = parsePathname(path);
  
    let items = pathNames.map((name) => {
      return <BCItemData>{
        name,
        path: getPath(path, name),
      };
    });
  
    items = removeIgnoredWords(items);
    items = convertArrayItems(items);
    let totalStringWidth: number = 0;
    for (let i = items.length - 1; i >= 0; i--) {
      totalStringWidth = totalStringWidth + getStringWidth(items[i].name) + 20;
      if (totalStringWidth > containerWidth) {
        return items.slice(i);
      }
    }
    return items;
  };
  
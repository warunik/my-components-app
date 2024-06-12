export interface ColorMap {
    active: string;
    activeSecondary: string;
    onActive: string;
    pending: {
      primary: string;
      secondary: string;
    };
    onPending: {
      primary: string;
      secondary: string;
    };
    error: string;
    onError: string;
    mute: string;
    outline: string;
    alternate: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    stroke: string;
  }
  
  export interface TextMap_ {
    large: string;
    medium: string;
    small: string;
  }
  
  export interface TextMap {
    display: TextMap_;
    headline: TextMap_;
    title: TextMap_;
    label: TextMap_;
    body: TextMap_;
  }
  
  export const theme: {
    colors: {
      light: ColorMap;
      dark?: ColorMap;
    };
    text: TextMap;
  } = {
    colors: {
      light: {
        active: '#2CC07B',
        activeSecondary: '#F5FAF9',
        onActive: '#FFFFFF',
        pending: {
          primary: '#FEAC56',
          secondary: '#171215',
        },
        onPending: {
          primary: '#FFFFFF',
          secondary: '#171215',
        },
        error: '#FB6063',
        onError: '#FFFFFF',
        mute: '#FFFFFF',
        outline: '#D2D2D2',
        alternate: {
          primary: '#1E293B',
          secondary: '#EDEEEF',
        },
        text: {
          primary: '#4D4D4D',
          secondary: '#4E4E4E',
          tertiary: '#959595',
        },
        stroke: '#D7D8DC',
      },
      // dark: {
      //
      // }
    },
    text: {
      display: {
        large: '4.8rem',
        medium: '4.0rem',
        small: '3.6rem',
      },
      headline: {
        large: '3.2rem',
        medium: '2.8rem',
        small: '2.4rem',
      },
      title: {
        large: '2.2rem',
        medium: '2.0rem',
        small: '1.8rem',
      },
      label: {
        large: '1.6rem',
        medium: '1.4rem',
        small: '1.2rem',
      },
      body: {
        large: '1.6rem',
        medium: '1.4rem',
        small: '1.2rem',
      },
    },
  };
  
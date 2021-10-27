import { createTheme } from '@mui/material/styles';

/**
 * This theme is created by MUI theme creator.
 * Please modify some values like colors, fonts, font-size to see update on the UI side.
 */
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1da1f2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
    warning: {
      main: '#FF9800',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      contrastText: '#ffffff',
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      defaultProps: {
        size: 'medium',
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: 'medium',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'medium',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'medium',
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'medium',
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'medium',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'medium',
        margin: 'dense',
      },
    },
    MuiList: {
      defaultProps: {
        dense: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'default',
      },
    },
  },
  typography: {
    overline: {
      fontFamily: 'Montserrat',
    },
    fontFamily: 'Montserrat',
    htmlFontSize: 18,
  },
  shape: {
    borderRadius: 8,
  },
});

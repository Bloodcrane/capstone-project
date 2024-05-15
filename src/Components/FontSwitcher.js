import { useTranslation } from 'react-i18next';

const useFontSwitcher = () => {
  const { i18n } = useTranslation();

  const getFontFamily = () => {
    switch (i18n.language) {
      case 'ge':
        return 'Noto Sans Georgian, sans-serif;';
      case 'en':
      default:
        return 'Fira Sans, sans-serif';
    }
  };

  return { getFontFamily };
};

export default useFontSwitcher;

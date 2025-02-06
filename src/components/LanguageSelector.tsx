import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: any) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      size="small"
      sx={{
        minWidth: 80,
        height: 35,
        backgroundColor: 'white',
        '& .MuiSelect-select': {
          paddingTop: '5px',
          paddingBottom: '5px',
        }
      }}
    >
      <MenuItem value="fr">FR</MenuItem>
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="es">ES</MenuItem>
    </Select>
  );
};

export default LanguageSelector;

import themeScp from '@splunk/themes/scp';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';

const theme = {
    ...themeScp,
    ...reactUIThemes.scp,
};

export default theme;

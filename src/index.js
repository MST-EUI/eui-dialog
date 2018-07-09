import Dialog from './Dialog';
import confirm from './confirm';


Dialog.confirm = (props) => {
    const config = {
        type: 'confirm',
        okCancel: true,
        ...props
    };
    return confirm(config);
};

export default Dialog;


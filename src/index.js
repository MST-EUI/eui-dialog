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

Dialog.success = (props) => {
    const config = {
        type: 'success',
        okCancel: false,
        ...props
    };
    return confirm(config);
};

Dialog.error = (props) => {
    const config = {
        type: 'error',
        okCancel: false,
        ...props
    };
    return confirm(config);
};

Dialog.info = (props) => {
    const config = {
        type: 'info',
        okCancel: false,
        ...props
    };
    return confirm(config);
};

export default Dialog;


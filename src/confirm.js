import ReactDOM from 'react-dom';
import Dialog from './Dialog';

export default function confirm (props = {}) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    function close() {
        const unmountedResult = ReactDOM.unmountComponentAtNode(div);
        if (div.parentNode && unmountedResult) {
            div.parentNode.removeChild(div);
        }
    }


    return {
        close,
    }
}

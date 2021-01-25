import { blockVisibility, hoistingTest } from './features/1_theme_let_const';
import arrowFunction from './features/2_theme_arrow_functions';

window.blockVisibility = () => {
    try {
        blockVisibility();
    }
    catch {
        throw 'variables declared throuth let do not work outside code block which they were declared';
    }
};

window.hoistingTest = () => {
    try {
        return hoistingTest();
    }
    catch {
        throw 'variables declared throuth let do not hosting'
    }
};


window.arrowFunction = () => {
    arrowFunction.old();
    arrowFunction.arrow();
    arrowFunction.timeoutOld();
    arrowFunction.timeoutArrow();
};
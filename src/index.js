import { blockVisibility, hoistingTest } from './features/1_theme_let_const';

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

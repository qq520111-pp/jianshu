let obj = {
    search: {
        wValue: '',
        value: '123',
        isHistoryShow: false
    },
    user_inif: {

    },
    loading: false
}

function reducer(state = obj, action) {
    if (action.type === 'change_input_width') {
        var oldState = JSON.parse(JSON.stringify(state));
        oldState.search.wValue = action.wValue;
        oldState.search.isHistoryShow = action.isHistoryShow;

        return oldState
    }
    if (action.type === 'change_input_value') {
        var oldState = JSON.parse(JSON.stringify(state));
        oldState.search.value = action.value;
        return oldState
    }
    if (action.type === 'change_user_inif') {
        var oldState = JSON.parse(JSON.stringify(state));
        oldState.user_inif = action.value;
        return oldState
    }
    if (action.type === 'change_loading') {
        var oldState = JSON.parse(JSON.stringify(state));
        oldState.loading = action.value;
        return oldState
    }
    return obj
}
export default reducer
const prefixUrl = (url) => {
    return /http/.test(url) ? url : 'http://park.dreeck.com/app/icons' + url
}

const formatText = (text) => {
    return text.replace(/\n/g, '<br/>')
}

export {
    formatText,
    prefixUrl
}
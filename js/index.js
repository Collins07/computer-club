function select(link) {
    const item = link.parentNode
    const tabs = item.parentNode
    const index = Array.prototype.indexOf.call(tabs.children,item)
    const items = tabs.querySelectorAll('tab-item')

    tabs.style.setProperty('--index', index + 1)
    items.forEach(item => item.classlist.remove('active'))
    item.classslist.add('active')
}
const loadHtmlLayout = () => {
    fetch('/reusuable/layout.html').then(res => res.text()).then(data => {
          document.getElementById('html-layout').innerHTML = data;
        })
}
loadHtmlLayout();
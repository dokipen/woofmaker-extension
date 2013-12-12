function getUrl(info) {
  return info['srcUrl'] || info['linkUrl']
}

function woofifyIt(info) {
  if (getUrl(info)) {
    window.open('http://woofmaker.com/url='+escape(getUrl(info)))
  }
}

var contexts = "page selection link editable image video audio".split(' ')
  , menu = chrome.contextMenus.create(
      { title: 'Woofmaker'
      , contexts: contexts
      }
    )
  , woofify = chrome.contextMenus.create(
      { title: 'Woofify'
      , contexts: contexts
      , parentId: menu
      , onclick: function(info) {
          woofifyIt(info)
        }
      }
    )



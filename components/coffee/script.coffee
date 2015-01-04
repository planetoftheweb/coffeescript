info = [
  'Ray Villalobos'
  'http://planetoftheweb.com'
  'http://authoredcontent.com'
  'http://iviewsource.com'
]

fillOut = (name, links...) ->
  $('#content').append "#{name}<br>"
  for item in links
    $('#content').append "#{item}<br>"

fillOut info...

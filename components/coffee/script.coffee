append = (item) ->
  $('#content').append "#{item}"

author = 'Morten'

switch author
  when 'Ray' then append 'JavaScript'
  when 'James', 'Morten' then append 'Web Design'
  else append 'Training'
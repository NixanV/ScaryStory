window.addEventListener("load", solve);

function solve() {
  let fName_input = document.getElementById('first-name')
  let lName_input = document.getElementById('last-name')
  let age_input = document.getElementById('age')
  let storyTitle_input = document.getElementById('story-title')
  let genre_input = document.getElementById('genre')
  let sotry_input = document.getElementById('story')

  let publish_btn = document.getElementById('form-btn')

  publish_btn.addEventListener('click', publised)

  let ul_preview_list = document.getElementById('preview-list')

  let div_main = document.getElementById('main')
  let all_divs = document.querySelectorAll('div')


  function publised(e) {
    e.preventDefault()

    if (fName_input.value == '' || lName_input.value == '' || age_input.value == '' || storyTitle_input.value == '' || sotry_input.value == '') {
      return
    }

    let first_name = fName_input.value
    let last_name = lName_input.value
    let age = age_input.value
    let title = storyTitle_input.value
    let story = sotry_input.value
    let ganre = genre_input.value

    let li_published = document.createElement('li')
    li_published.className = 'preview-list'

    let article_published = document.createElement('article')
    article_published.innerHTML = `
    <h4>Name: ${first_name} ${last_name}</h4>
    <p>Age: ${age}</p>
    <p>Title: ${title}</p>
    <p>Genre: ${ganre}</p>
    <p>${story}</p>
    `
    li_published.appendChild(article_published)

    let save_btn = document.createElement('button')
    save_btn.className = 'save-btn'
    save_btn.textContent = 'Save Story'
    let edit_btn = document.createElement('button')
    edit_btn.className = 'edit-btn'
    edit_btn.textContent = 'Edit Story'
    let delete_btn = document.createElement('button')
    delete_btn.className = 'delete-btn'
    delete_btn.textContent = 'Delete Story'

    li_published.appendChild(save_btn)
    li_published.appendChild(edit_btn)
    li_published.appendChild(delete_btn)

    ul_preview_list.appendChild(li_published)
    publish_btn.disabled = true

    fName_input.value = ''
    lName_input.value = ''
    age_input.value = ''
    storyTitle_input.value = ''
    sotry_input.value = ''


    edit_btn.addEventListener('click', edit)
    delete_btn.addEventListener('click', delete_func)
    save_btn.addEventListener('click', save_func)

    function edit() {
      fName_input.value = first_name
      lName_input.value = last_name
      age_input.value = age
      storyTitle_input.value = title
      sotry_input.value = story
      genre_input.value = ganre

      li_published.remove()
      publish_btn.disabled = false

    }

    function save_func() {
      div_main.removeChild(div_main.firstChild)
      div_main.innerHTML = `<h1>Your scary story is saved!</h1>`
    }



    function delete_func() {
      li_published.remove()
      publish_btn.disabled = false
    }

  }

}

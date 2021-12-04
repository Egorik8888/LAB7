function text1roll(){
    document.getElementById('author_box_button').hidden = true
    document.getElementById('author_box_button_2').hidden = false
    document.getElementById('author_box').id = 'author_box_new'
}
function text1rollback(){
    document.getElementById('author_box_button').hidden = false
    document.getElementById('author_box_button_2').hidden = true
    document.getElementById('author_box_new').id = 'author_box'
}
function text2roll(){
    document.getElementById('book_frag_button').hidden = true
    document.getElementById('book_frag_button_2').hidden = false
    document.getElementById('book_frag_button_2_file').hidden = false
    document.getElementById('book_frag_box').id = 'book_frag_box_new'
}
function text2rollback(){
    document.getElementById('book_frag_button').hidden = false
    document.getElementById('book_frag_button_2').hidden = true
    document.getElementById('book_frag_button_2_file').hidden = true
    document.getElementById('book_frag_box_new').id = 'book_frag_box'
}
function menu(){
    document.getElementById('menu').id = 'new_menu'
    document.querySelectorAll('nav_item_new') = 'new_menu'
}
function menuback(){
    document.getElementById('new_menu').id = 'menu'
    document.querySelectorAll('nav_item') = 'nav_item_new'
}
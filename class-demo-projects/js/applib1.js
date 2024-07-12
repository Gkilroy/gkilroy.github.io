function generate_field_error_list_string(form_error_array)
{
    let _text = "<ul>";

    for(let i=0; (i<form_error_array.length);i++)
    {
        _text += "<li>" + form_error_array[i] + "</li>";
    }

    _text += "</ul>";

    return _text;
}
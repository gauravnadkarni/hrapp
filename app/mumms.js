var savedForms = new Object()

function saveForm (formName) {
    var form = document.forms[formName]
    var save = new Object()
    for (var i = 0; i < form.elements.length; i++)
        with (form.elements[i])
            save[name] = value
    savedForms[formName] = save
}

function confirmCancel (href) {
    var dirty = false
    for (var f in savedForms) 
        for (var n in savedForms[f])
            if (document.forms[f].elements[n].value != savedForms[f][n]) {
                dirty = true
                break
            }

    if (
        !dirty ||
        confirm("This action will discard any changes you have made to this form.\n" +
                "Okay to discard your changes?")
    ) {
        location.href = href
    }
}

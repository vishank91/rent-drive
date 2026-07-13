export default function TextValidators(e) {
    let { name, value } = e.target
    switch (name) {
        case 'name':
        case 'icon':
            if (!value || value.length === 0)
                return name + " Field Is Mendatory"
            else if (value.length < 2 || value.length > 100)
                return name + " Field Length Must Be 2-100 Characters"
            else
                return ""

            case 'shortDescription':
            if (!value || value.length === 0)
                return name + " Field Is Mendatory"
            else if (value.length < 50)
                return name + " Field Length Must Be 50 Characters or More"
            else
                return ""
        default:
            return ""
    }
}

exports.ok = (values, res) =>{
    const data = {
        'responseCode':200,
        'data':values
    }
    res.status(200).json(data);
}

exports.created = (values, res) =>{
    const data = {
        'responseCode':201,
        'data':values
    }
    res.status(201).json(data);
}

exports.fail = (values, res) =>{
    const data = {
        'responseCode':400,
        'message':values
    }
    res.status(400).json(data);
}
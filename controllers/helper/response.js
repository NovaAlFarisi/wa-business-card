exports.ok = (values, res) =>{
    const data = {
        'data':values,
        'count':values.length
    }
    res.status(400).json(data);
}
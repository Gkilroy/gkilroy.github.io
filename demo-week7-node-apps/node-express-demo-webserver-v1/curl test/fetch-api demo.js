function fetchapidemo()
{
    try{
        const_url = "https://18959b93-e44b-40f4-95f8-0b8b59c124c6-00-jxhcsmotgrnu.spock.repl.co/test1";

fetch(https://18959b93-e44b-40f4-95f8-0b8b59c124c6-00-jxhcsmotgrnu.spock.repl.co/test1)
    .then(res -> res.json())
    .then(data => alert(data))
    .error(error=> alert(error))
    }
    catch(error)
    {
        alert ("fetch api demo:error");
        alert(err)
    }
}
fetchapidemo()
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = 'https://azureresume1234.azurewebsites.net/api/GetResumeCounter?code=Mu4TpupmqLyMgAiivJ3txlqtQtsdAESuCKOFEZqB8UlIAzFuFWEtoQ==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementByID("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

function cardMaker(data) {
    //console.log(data);
    return data.map((employee) => {
        if (employee.getRole() === 'Manager') {
            //console.log(employee.getRole()); 
            return `
            <div class="col-md-6 col-lg-4 mb-2">
            <div class="card">
                <div class="card-header bg-primary text-light">
                    <h2>${employee.getName()}</h2>
                    <h3><i class="fas fa-mug-hot"></i> Manager</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: <a href="tel:${employee.getOffice()}">${employee.getOffice()}</a></li>
                </ul>
            </div>
        </div>
            `
        }
        else if (employee.getRole() === 'Engineer') {
            //console.log(employee.getRole());
            return `
            <div class="col-md-6 col-lg-4 mb-2">
            <div class="card">
                <div class="card-header bg-primary text-light">
                    <h2>${employee.getName()}</h2>
                    <h3><i class="fas fa-glasses"></i> Engineer</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `
        } else {
            //console.log('Intern');
            return `
            <div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-header bg-primary text-light">
                    <h2>${employee.getName()}</h2>
                    <h3><i class="fas fa-user-graduate"></i> Intern</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">School: ${employee.getSchool()}</li>
                </ul>
            </div>
        </div>
            `
        }
    }).join('')
    
}




function generateHTML(data) {
    //managerMaker(data);
    //console.log(data);
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-*">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <title>Team Profile Generator</title>
    
</head>
<body class="mb-2">
    <div class="jumbotron text-center bg-danger">
        <h1 class ="text-light" >My Team</h1>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            ${cardMaker(data)}
        </div>
    </div>
    
</body>
</html>`
};


module.exports = generateHTML;
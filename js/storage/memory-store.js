var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.employees = [           
			{"id": 1, "firstName": "Okeana", "lastName": "doo", "title":"Svako 128 pivo - gratis", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com","address":"Smareglina 22, 52100 Pula","points":"4"},
			{"id": 2, "firstName": "Q-Time", "lastName": "doo", "title":"Svaka treca kava - gratis", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com","address":"Matka Laginje 1, 52100 Pula","points":"6"},
			{"id": 3, "firstName": "Fresh", "lastName": "inc", "title":"Svaki peti smoothie - besplatan", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com","address":"Anticova 22, 52100 Pula","points":"2"}
			
        ];

    callLater(successCallback);

}
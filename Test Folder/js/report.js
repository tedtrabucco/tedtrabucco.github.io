let inspection = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json?city=COLLEGE PARK&name=MOM'S ORGANIC MARKET"; //PANDA EXPRESS 2578

fetch(inspection)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            var failed = 0, total = 0;
            var recent = '';
            var recentResult = '';
            for (var i = 0; i < data.length; i++) {
                if (data[i].inspection_date < "2015-09-12T00:00:00.000"){
                    continue
                }
                console.log(data[i].inspection_results)
                console.log(data[i].inspection_results == "Compliant - No Health Risk") //NOT WORKING W OR OPERATOR Compliance Schedule - Completed
                var div = document.createElement("div");
                div.innerHTML = data[i].name + ', '+ data[i].inspection_date + ', ' + data[i].inspection_results;
                mainContainer.appendChild(div)
                if (data[i].inspection_results != "Compliant - No Health Risk" || "Compliance Schedule - Completed"){
                    failed += 1
                }
                total +=1
                if (data[i].inspection_date > recent){
                    recent = data[i].inspection_date
                    recentResult = data[i].inspection_results
                }
                /*console.log(typeof(recentResult))
                console.log(typeof(data[0].inspection_results))
                console.log(typeof(data[0].inspection_date))*/
            }
            if (recentResult = "Compliant - No Health Risk" || "Compliance Schedule - Completed" || "Compliant - No Health Risk"){
                recentText = "passed"
            }
            if (recentResults = "Critical Violations observed" || "Non-Compliant - Violations Observed"){
                recentText = "failed"
            }
            else{
                recentText = 'error'
            }
            var reportContainer = document.getElementById("report");
            var div = document.createElement("div");
            div.innerHTML = 'In the last five years this restaurant has failed ' + failed + ' out of  ' + total + ' Inspections. It ' + recentText + ' the most recent inspection on ' + recent.substr(0,10) + '.' + '<br>';
            reportContainer.appendChild(div)
            }
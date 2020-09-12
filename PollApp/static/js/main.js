    $(document).ready(function(){
                $.ajax({

                    type: "GET",
                    url: "http://127.0.0.1:8000/api/",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(result){
                        var i,data;
                        presUrl = window.location.href.split("");
                        for(i=0;i<result.data.length;i++){
                            Qid = presUrl[presUrl.length-1]
                            if(result.data[i]['id'] == parseInt(Qid)){
                                Reqdata = result.data[i];
                                data = Reqdata;
                                console.log(data)
                                let myChart = document.getElementById("myChart").getContext('2d');

                                Chart.defaults.global.defaultFontFamily='Lato';
                                Chart.defaults.global.defaultFontColor='#777';
                                Chart.defaults.global.defaultFontSize=18;
                                let OutChart = new Chart(myChart,{
                                        type:'doughnut',
                                        data:{
                                            labels:[data['Opt1'],data['Opt2'],data['Opt3']],
                                            datasets:[{
                                            lable:'Compare',
                                            data:[data['Vote1'],data['Vote2'],data['Vote3']],
                                            backgroundColor:['lightblue','red','green']
                                        }]
                                    },
                                    options:{
                                        title:{
                                            display:true,
                                            fontSize:25,
                                            text:data['Question']
                                        },
                                    }
                });

                }
                            }
                        }
                });

            });
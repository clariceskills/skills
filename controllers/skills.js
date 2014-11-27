var skillapp = angular.module('skillapp',[]);
    skillapp.controller('SkillCtrl',['$scope','$http',
        function ($scope,$http) {
	    	$scope.js_path ="../js/";
	    	$scope.css_path ="../css/";
	    	$scope.jspaths = [
	    	    {name: $scope.js_path+"angular-route.js"},	    		
	    		{name: $scope.js_path+"angular-resource.js"},
	    		{name:"controllers/skill.js"
	    	}];	        
            $scope.submitSkill = "Add";
            $scope.mySkills = [];
            $scope.categories = [{name: "Languages",id:'1'},
                {name: "Platforms",id:'2'},
                {name: "Frameworks",id:'3'},
                {name: "Tools",id:'4'}];
            $scope.gridOptions = { data: 'mySkills' };
            $scope.category = '';
            $scope.addSkills = function () {                
                if($scope.submitSkill=="Add"){
                    $scope.mySkills.push({
                        name: $scope.skill,
                        category: $scope.category
                    });
                }else{
                    $scope.mySkills[$scope.skillpos].name=$scope.skill;
                    $scope.mySkills[$scope.skillpos].category=$scope.category;
                }
                $scope.submitSkill = "Add";
            $scope.remove = function(sindex) {
                /*var index = -1;
                var dupArr = eval( $scope.mySkills);
                for( var i = 0; i < dupArr.length; i++ ) {
                    if( dupArr[i].name === name ) {
                        index = i;
                        break;
                    }
                }
                if( index === -1 ) {
                    alert( "Something gone wrong" );
                }
                console.log(sindex+" "+index);*/
                $scope.mySkills.splice( sindex, 1 );
            }
            $scope.edit= function(index){
                $scope.submitSkill = "Update";
                $scope.skillpos = index;
                $scope.skill = $scope.mySkills[index].name;
                $scope.category = $scope.mySkills[index].category;
            }
            $scope.skill = '';
            $scope.category = '';
        }
    }]);
    
    
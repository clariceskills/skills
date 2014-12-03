angular.module('skillApp')
.controller('EmpSkillsCtrl',['$scope','$http','skillService','empSkillService',
        function ($scope,$http,skillService,empSkillService) {
		$scope.submitSkill = "Add";
    	skillService.listCategories().success(function(categories) {
    		console.log(categories);
    		$scope.categories = categories;
    	})
    	getSkillList();
    	function getSkillList() {
    		skillService.listSkills().success(function(skills){
        		$scope.skills = skills;
        		console.log(skills);
        	});
    	} 
    	
        $scope.addSkills = function () {
        	skill_id = $scope.skillName;
        	level_id = $scope.level;
        	if($scope.submitSkill === "Add") { 
        	empSkillService.addEmpSkills(100,"vijay@gmail.com",skill_id,level_id,"2014-12-03","2014-12-03").success(function(){
        		getEmpSkillList();
        	})
        	} else {
        		id = $scope.id;
        		empSkillService.updateSkills(id,skill_id,level_id).success(function(){
        			getEmpSkillList();
        			$scope.skillName = '';
                    $scope.category = '';
        		})
        	}
        	$scope.submitSkill = "Add";
    	}
        
        $scope.edit= function(index,skill_id){
            $scope.submitSkill = "Update";
            $scope.id = index;
            console.log($scope.empSkills);
            var dupArr = $scope.empSkills;
            for( var i = 0; i < dupArr.length; i++ ) {
                if( dupArr[i].id === index ) {
                    index = i;
                    break;
                }
            }
            $scope.level = $scope.empSkills[index].level_id;
            $scope.category = $scope.empSkills[index].skillCategory;
            $scope.skillName = skill_id;
            
        }
        
        $scope.removeSkills = function(id) {
        	empSkillService.removeSkills(id).success(function(){
        		getEmpSkillList();
        	})
        }
        
        getEmpSkillList();
        function getEmpSkillList() {
        	empSkillService.getEmpSkills(100).success(function(empSkills){
        		console.log(empSkills);
        		$scope.empSkills = empSkills;
        	})
        }
    }]);

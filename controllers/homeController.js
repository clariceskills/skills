angular.module('skillApp')
.controller('SkillCtrl',['$scope','$http','skillService',
        function ($scope,$http,skillService) {
	    $scope.submitSkill = "Add";
	    $scope.skillName = "skillName";
    	skillService.listCategories().success(function(categories) {
    		$scope.categories = categories;
    	})
    	getSkillList()
    	function getSkillList() {
    		skillService.listSkills().success(function(skills){
        		$scope.skills = skills;
        	});
    	} 
        $scope.addSkills = function () {
        	language = $scope.skill;
        	category = $scope.category;
        	if($scope.submitSkill === "Add") {        		
    		skillService.addSkills(language,category).success(function(){
    				getSkillList();
        			$scope.skill = '';
                    $scope.category = '';
    			
            })
        	} else {
        		id = $scope.id;
        		skillService.updateSkills(id,language,category).success(function(){
        			getSkillList();
        			$scope.skill = '';
                    $scope.category = '';
        		})
        	}
        	$scope.submitSkill = "Add";
    	}
        $scope.removeSkills = function(id) {
        	skillService.removeSkills(id).success(function(){
        		getSkillList();
        	})
        }
        $scope.edit= function(index){
            $scope.submitSkill = "Update";
            $scope.id = index;
            console.log($scope.skills);
            var dupArr = $scope.skills;
            for( var i = 0; i < dupArr.length; i++ ) {
                if( dupArr[i].id === index ) {
                    index = i;
                    break;
                }
            }
            $scope.skill = $scope.skills[index].skillName;
            $scope.category = $scope.skills[index].category_id;
        }
    }]);

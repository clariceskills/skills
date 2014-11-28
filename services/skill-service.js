/**
 * 
 */
'use strict';
// skillService to access the API
angular.module('skillApp').service('skillService', [ '$http', function($http) {

	var urlBase = 'http://localhost:8080/appraisal/skill/';
	var skillService = {};

	skillService.listSkills = function() {
		return $http.get(urlBase + 'getSkills');
	};
	
	skillService.addSkills = function(language,category) {
		return $http.post(urlBase + 'createSkill',{skillName:language,skillCategory:category});
	};
	
	skillService.removeSkills = function(id) {
		return $http.delete(urlBase + 'deleteSkill/'+ id);
	};
	
	skillService.updateSkills = function(id,langauge,category) {
		return $http.put(urlBase + 'updateSkill',{id:id,skillName:language,skillCategory:category})
	};
	
	return skillService;
} ]);

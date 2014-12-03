/**
 * 
 */
'use strict';
// skillService to access the API
angular.module('skillApp').service('empSkillService', [ '$http', function($http) {

	var urlBase = 'http://localhost:8080/appraisal/empSkill/';
	var empSkillService = {};

	empSkillService.addEmpSkills = function(emp_id, emp_primary_email, skill_id,level_id, emp_skill_created_date, emp_skill_updated_date) {
		return $http.post(urlBase + 'createEmpSkill',{emp_id:emp_id, emp_primary_email:emp_primary_email,
			skill_id:skill_id,level_id:level_id, emp_skill_created_date:emp_skill_created_date, emp_skill_updated_date:emp_skill_updated_date});
	};
	
	empSkillService.getEmpSkills = function(emp_id) {
		return $http.get(urlBase + 'getEmpSkills/' + emp_id);
	};
	
	empSkillService.removeSkills = function(id) {
		return $http.delete(urlBase + 'deleteEmpSkill/' + id);
	};
	
	empSkillService.updateSkills = function(id,skill_id,level_id) {
		return $http.put(urlBase + 'updateEmpSkill',{id:id,skill_id:skill_id,level_id:level_id})
	};
	
	return empSkillService;
} ]);

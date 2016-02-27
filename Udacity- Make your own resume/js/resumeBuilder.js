
var bio = {
  "name": "Danish O'Habib",
  "role": "Senior Recruiter",
  "contacts" : {
    "mobile": "519-722-7497",
    "email": "dohabib@gmail.com",
    "github": "Danish15",
    "twitter": "@DanishOHabib",
    "location": "Waterloo, Ontario"
  },
  "welcomeMessage": "Welcome to my resume.",
  "skills": ["Public Speaking", "Research", "Programming", "Multilingual",],
  "bioPic": "images/me.jpg"
};

var work= {
  "jobs": [
      {
    "employer" : "Wilfrid Laurier University",
    "title" : "Senior Recruiter",
    "dates" : "August 2014-Present",
    "location" : 'Waterloo, Ontario',
      "url": "https://www.wlu.ca",
    "description" : "Travel and recruit high school students across Ontario to ensure a smooth, quick, and consistent student experience to aid Laurier’s domestic enrollment objectives"
},

{
"employer" : "Wind Mobile",
"title" : "Sales Associate",
"dates" : "June 2013-June 2014",
"location" : 'Kitchener, Ontario',
"url": "https://www.windmobile.ca",
"description" : "Fast paced sales environment offering cell phone plans, cell phones, and accessories."
}

]
};

var education = {
  "schools" : [
  {
    "name" : "Wilfrid Laurier University",
    "location" : "Waterloo, Ontario",
    "degree" : "Bachelor of Science",
    "major" : "Health Sciences",
    "minor" : "Biological Sciences",
    "dates" : "2009-2013",
    "url" : "https://www.wlu.ca/programs/science/undergraduate/health-sciences-bsc/index.html"
}
],
};

var projects = {
"projects" : [
  {
    "title" : "Web Development",
    "dates" : "2015-Present",
    "description" : "Learning front-end web development from a variety of online curriculums.",
    "url": "https://github.com/Danish15"
  },

  {
    "title" : "Communication among Frontline Health Practitioners: Findings from Pilot Questionnaire",
    "dates" : "2013-2014",
    "description" : "Investigating the degree to which front line practitioners currently communicate across geographical and disciplinary boundaries and gather opinions about how communication might be made more efficient.",
      "url": "https://ca.linkedin.com/in/danish-o-habib-92320a47"
  }
    ]
  };

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}
	}
}

education.display();

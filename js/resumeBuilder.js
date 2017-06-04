/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
   "name": "bioname",
   "role": "biorole",
   "contacts": {
     "mobile": "mobile",
     "email": "email",
     "github": "github",
     "location": "Boston, MA"
   },
   "welcomeMessage": "welcomeMessage",
   "skills": ["awesome","deliver"],
   "biopic": "images/fry.jpg"
   // "display":
 };

 var education = {
   "schools": [{
       "name": "schoolname1",
       "location": "San Diego, CA",
       "degree": "degree1",
       "majors": ["major1","major2"],
       "dates": "xx-xx-xxxx",
       "url":"schoolurl1"
     },
     {
       "name": "schoolname2",
       "location": "San Diego, CA",
       "degree": "degree2",
       "majors": ["major3","major4"],
       "dates": "xx-xx-xxxx",
       "url":"schoolurl2"
     }
   ],
   "onlineCourses": [{
       "title": "title1",
       "school": "school2",
       "dates":"xx-xx-xxxx",
       "url":"http://"
     },
     {
       "title": "title2",
       "school": "school2",
       "dates":"xx-xx-xxxx",
       "url":"http://"
     }
   ],
   // "display":
 };

 var work = {
   "jobs": [{
       "employer": "employer1",
       "title": "title1",
       "location": "San Diego, CA",
       "dates": "dates1",
       "description": "description1"
     },
     {
       "employer": "employer2",
       "title": "title2",
       "location": "San Diego, CA",
       "dates": "dates2",
       "description": "description2"
     }
   ],
   // "display":
 };

 var projects = {
   "projects": [{
       "title": "title1",
       "dates": "dates1",
       "description": "description1",
       "images": ["images/fry.jpg","images/fry.jpg"]
     },
     {
       "title": "title2",
       "dates": "dates2",
       "description": "description2",
       "images": ["images/fry.jpg","images/fry.jpg"]
     }
   ]
 };

 bio.display = function() {
   var data = "%data%";
   var formattedName = HTMLheaderName.replace(data,bio.name);
   var formattedRole = HTMLheaderRole.replace(data,bio.role);
   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);

   for(var contact in bio.contacts) {
     var formattedcontact = HTMLcontactGeneric.replace("%contact%",contact);
     var formatteddata = formattedcontact.replace(data,bio.contacts[contact]);
     $("#topContacts, #footerContacts").append(formatteddata);
   }
   var formattedbiopic = HTMLbioPic.replace(data,bio.biopic);
   $("#header").append(formattedbiopic);
   var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data,bio.welcomeMessage);
   $("#header").append(formattedwelcomeMsg);

   if (bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);
     bio.skills.forEach(function(skill) {
       var formattedSkill = HTMLskills.replace(data,skill);
       $("#skills").append(formattedSkill);
     });
   }
 };
 bio.display();

 work.display = function() {
   var data = "%data%";
   work.jobs.forEach(function(job) {
     $("#workExperience").append(HTMLworkStart);
     var formattedEmployer = HTMLworkEmployer.replace(data,job.employer);
     var formattedTitle = HTMLworkTitle.replace(data,job.title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     $(".work-entry:last").append(formattedEmployerTitle);

     var formattedDates = HTMLworkDates.replace(data,job.dates);
     $(".work-entry:last").append(formattedDates);

     var formattedDescription = HTMLworkDescription.replace(data,job.description);
     $(".work-entry:last").append(formattedDescription);
   });
 };
 work.display();

 projects.display = function() {
   var data = "%data%";
   projects.projects.forEach(function(project) {
     $("#projects").append(HTMLprojectStart);

     var formattedTitle = HTMLprojectTitle.replace(data,project.title);
     $(".project-entry:last").append(formattedTitle);

     var formattedDates = HTMLprojectDates.replace(data,project.dates);
     $(".project-entry:last").append(formattedDates);

     var formattedDescription = HTMLprojectDescription.replace(data,project.description);
     $(".project-entry:last").append(formattedDescription);

     if(project.images.length > 0) {
       project.images.forEach(function(image) {
         var formattedImage = HTMLprojectImage.replace(data,image);
         $(".project-entry:last").append(formattedImage);
       });
     }
   });
 };
 projects.display();

 education.display = function() {
   var data = "%data%";
   education.schools.forEach(function(school) {
     $("#education").append(HTMLschoolStart);

     var formattedschoolname = HTMLschoolName.replace(data,school.name);
     var formattedschooldegree = HTMLschoolDegree.replace(data,school.degree);
     var formattedschoolnamedegree = formattedschoolname + formattedschooldegree;
     $(".education-entry:last").append(formattedschoolnamedegree);

     var formatteddates = HTMLschoolDates.replace(data,school.dates);
     $(".education-entry:last").append(formatteddates);

     var formattedlocation = HTMLschoolLocation.replace(data,school.location);
     $(".education-entry:last").append(formattedlocation);

     var formattedmajor = HTMLschoolMajor.replace(data,school.majors);
     $(".education-entry:last").append(formattedmajor);
   });

   $(".education-entry:last").append(HTMLonlineClasses);

   education.onlineCourses.forEach(function(course) {
     var formattedonlinetitle = HTMLonlineTitle.replace(data,course.title);
     var formattedonlineschool = HTMLonlineSchool.replace(data,course.school);
     var formattedonlinetitleschool = formattedonlinetitle + formattedonlineschool;
     $(".education-entry:last").append(formattedonlinetitleschool);

     var formattedonlinedates = HTMLonlineDates.replace(data,course.dates);
     $(".education-entry:last").append(formattedonlinedates);

     var formattedonlineurl = HTMLonlineURL.replace(data,course.url);
     $(".education-entry:last").append(formattedonlineurl);
   });
 };
 education.display();

 $("#mapDiv").append(googleMap);

document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('click', function () {
      alert('프로젝트를 클릭했습니다!');
    });
  });
});

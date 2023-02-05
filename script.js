

const downloadResume = () => {
    var link = document.createElement('a');
    link.href = './resume.pdf';
    link.download = 'resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));

}
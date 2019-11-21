let skills = ['CSS', 'JS', 'JAVA', 'REACT', 'NODEJS', 'PYTHON', 'MONGODB']

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill
}

function getAll() {
    return skills
}

function getOne(idx) {
    return skills[idx]
}

function create(skill) {
    skills.push(skill)
}

function deleteSkill(id) {
    skills.splice(id, 1);
}
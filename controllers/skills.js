var skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll()
    })

}

function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1,
        idx: req.params.id
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    skill.create(req.body.skill);
    res.redirect('/skills');
}

function deleteSkill(req, res) {

    skill.delete(req.params.id);
    res.redirect('/skills')
}

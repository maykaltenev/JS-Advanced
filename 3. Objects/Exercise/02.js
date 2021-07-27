function solve(worker) {

    let hydrate = worker.weight * 0.1 * worker.experience;
    if (worker.dizziness) {
        worker.levelOfHydrated += hydrate;
        worker.dizziness = false;
    }

    return worker;

}



console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
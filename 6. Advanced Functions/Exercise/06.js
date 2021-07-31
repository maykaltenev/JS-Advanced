function solution(command) {

    const commands = {

        'upvote': () => { this.upvotes++; },
        'downvote': () => { this.downvote++; },
        'score': () => {
            let totalVotes = this.downvotes + this.upvotes;
            let totalSocre = this.upvotes - this.downvotes;
            let inflationAmount = Math.ceil(Math.max(this.downvotes, this.upvotes) * 0.25);

            let inflatedUpvotes = this.upvotes + inflationAmount;
            let inflatedDownvotes = this.downvotes + inflationAmount;
            let rating = 'new';

            if(totalVotes < 10) {
                rating = 'new';
            }
            if ((this.upvotes / totalVotes) > 0.66) {
                rating = 'hot';
            } else if(this.downvotes <= this.upvotes && totalVotes > 100) {
                rating = 'controversial';
            } else if(this.downvotes && this.upvotes){
                rating = 'unpopular';
            }

            return [inflatedUpvotes,inflatedDownvotes,totalVotes,rating]
        }
    }
    return commands[command]();
}
def process_stats(filename, founders):
    with open(filename, 'r') as f:
        lines = f.readlines()
    
    total_commits = int(lines[-1].split(":")[1].strip())
    founder_commits = 0
    
    for line in lines[:-1]:
        count, author = line.strip().split(None, 1)
        if author in founders:
            founder_commits += int(count)
    
    non_founder_commits = total_commits - founder_commits
    return total_commits, non_founder_commits

def calculate_percentage(founders):
    total_commits = 0
    non_founder_commits = 0
    
    stats_file = './stats.txt'
    repo_total, repo_non_founder = process_stats(stats_file, founders)
    total_commits += repo_total
    non_founder_commits += repo_non_founder
    
    percentage = (non_founder_commits / total_commits) * 100 if total_commits > 0 else 0
    return round(percentage, 2)

# List of founders
founders = ['Duke Pan', 'Nathan A']

percentage = calculate_percentage(founders)
print(f"Percentage of non-founder contributions in the last 200 days: {percentage}%")
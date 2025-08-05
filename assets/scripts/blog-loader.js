const blogData = `Category: Machine Learning

blogcover1.png,
Use computer vision to measure agriculture yield with Amazon Rekognition Custom Labels,
https://aws.amazon.com/blogs/machine-learning/use-computer-vision-to-measure-agriculture-yield-with-amazon-rekognition-custom-labels/

blogcover2.png,
Building your own brand detection and visibility using Amazon SageMaker Ground Truth and Amazon Rekognition Custom Labels
https://aws.amazon.com/blogs/machine-learning/part-1-end-to-end-solution-building-your-own-brand-detection-and-visibility-using-amazon-sagemaker-ground-truth-and-amazon-rekognition-custom-labels/

blogcover3.png,
Build your own brand detection and visibility using Amazon SageMaker Ground Truth and Amazon Rekognition Custom Labels
https://aws.amazon.com/blogs/machine-learning/part-2-build-your-own-brand-detection-and-visibility-using-amazon-sagemaker-ground-truth-and-amazon-rekognition-custom-labels-training-and-analysis-workflows/

blogcover4.png,
Using machine learning to support healthcare during a pandemic,
https://aws.amazon.com/blogs/awsmarketplace/using-machine-learning-to-support-healthcare-during-a-pandemic/

blogcover5.png,
Use computer vision to detect crop disease through image analysis with Amazon Rekognition Custom Labels,
https://aws.amazon.com/blogs/machine-learning/plant-leaf-disease-detection-with-amazon-rekognition-custom-labels/

blogcover6.png,
Automate code reviews with Amazon CodeGuru Reviewer,
https://aws.amazon.com/blogs/devops/automate-code-reviews-with-amazon-codeguru-reviewer/

blogcover7.png,
Applying Machine Learning to Vegetation Management using Amazon SageMaker
https://aws.amazon.com/blogs/architecture/field-notes-applying-machine-learning-to-vegetation-management-using-amazon-sagemaker/

blogcover8.png,
AWS DeepComposer Battle of the Bands League
https://aws.amazon.com/blogs/machine-learning/accenture-promotes-machine-learning-growth-with-worlds-largest-private-aws-deepcomposer-battle-of-the-bands-league/

Category: Data | Networking | Analytics

blogcover9.png,
Analyze and visualize your VPC network traffic using Amazon Kinesis and Amazon Athena
https://aws.amazon.com/blogs/big-data/analyze-and-visualize-your-vpc-network-traffic-using-amazon-kinesis-and-amazon-athena/

blogcover10.png,
Query an Apache Hudi dataset in an Amazon S3 data lake with Amazon Athena,
https://aws.amazon.com/blogs/big-data/part-1-query-an-apache-hudi-dataset-in-an-amazon-s3-data-lake-with-amazon-athena-part-1-read-optimized-queries/

blogcover11.png,
Building a real-time notification system with Amazon Kinesis Data Streams for Amazon DynamoDB and Amazon Kinesis Data Analytics for Apache Flink,
https://aws.amazon.com/blogs/big-data/building-a-real-time-notification-system-with-amazon-kinesis-data-streams-for-amazon-dynamodb-and-amazon-kinesis-data-analytics-for-apache-flink/

Category: No code App | Infrastructure | AR/VR

blogcover12.png,
How to create an Expense Tracking App without coding using Amazon Honeycode,
https://aws.amazon.com/blogs/business-productivity/how-to-create-an-expense-tracking-app-without-coding-using-amazon-honeycode/

blogcover13.png,
Performing canary deployments for service integrations with Amazon API Gateway,
https://aws.amazon.com/blogs/compute/performing-canary-deployments-for-service-integrations-with-amazon-api-gateway/

blogcover14.png,
Transforming the Traveling Experience with Accenture 5G Smart Airport Assistant and Amazon AR/VR,
https://aws.amazon.com/blogs/apn/transforming-the-traveling-experience-with-accenture-5g-smart-airport-assistant-and-amazon-ar-vr/`;

function parseBlogs(text) {
    const lines = text.split('\n').filter(line => line.trim() && !line.startsWith('Category:'));
    const blogs = [];
    
    for (let i = 0; i < lines.length; i += 3) {
        if (lines[i] && lines[i + 1] && lines[i + 2]) {
            blogs.push({
                image: lines[i].replace(/,$/, '').trim(),
                title: lines[i + 1].replace(/,$/, '').trim(),
                url: lines[i + 2].trim()
            });
        }
    }
    return blogs;
}

function createBlogCard(blog) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => window.open(blog.url, '_blank');
    
    card.innerHTML = `
        <div class="movie-poster">
            <div class="blog-cover" style="background-image: url('../assets/images/blogs/${blog.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <div class="blog-title" style="background: rgba(0,0,0,0.7); padding: 1rem; border-radius: 8px;">${blog.title}</div>
            </div>
            <div class="movie-overlay">
                <div class="movie-title">${blog.title}</div>
                <div class="movie-description">${blog.title}</div>
            </div>
        </div>
    `;
    
    return card;
}

function loadBlogs() {
    try {
        const blogs = parseBlogs(blogData);
        
        const grid = document.querySelector('.movies-grid');
        grid.innerHTML = '';
        
        blogs.forEach(blog => {
            const card = createBlogCard(blog);
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading blogs:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadBlogs);
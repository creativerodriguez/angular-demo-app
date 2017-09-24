export class ProductService{
    getProducts() {
            return [
            { 
                imageUrl: "https://avatars1.githubusercontent.com/u/4428098?v=4",
                productName: "Product 1",
                releasedDate: new Date(2016,5,30),
                description: "Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe.",        
                rating: 4,
                numOfReviews: 2
            },
            { 
                imageUrl: "https://avatars1.githubusercontent.com/u/4428098?v=4",
                productName: "Product 2",
                releasedDate: new Date(2016,10,30),
                description: "Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe.",        
                rating: 2,
                numOfReviews: 12          
            },
            {                 
                imageUrl: "https://avatars1.githubusercontent.com/u/4428098?v=4",
                productName: "Product 3",
                releasedDate: new Date(2016,7,30),
                description: "Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe.",        
                rating: 5,
                numOfReviews: 2
            }];
        }    
}
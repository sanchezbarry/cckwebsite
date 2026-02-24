# Supabase Setup Instructions

## Create the Member User

To get the login working, you need to create a user in your Supabase project:

1. **Go to your Supabase Dashboard**
   - URL: https://app.supabase.com
   - Project: njkazshloggqkdygthtu

2. **Navigate to Authentication → Users**
   - Click "Add user" or "Invite user"

3. **Create the user with these details:**
   - Email: `member@cck.church`
   - Password: Choose a strong password (this is what members will use to login)
   - Auto confirm user: Check this box

4. **Save the user**

Now when members visit the login page, they'll enter the password you set, and they'll be authenticated via Supabase.

## Environment Variables

Your `.env.local` already has the Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://njkazshloggqkdygthtu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_uRCCS6nKWcUoAFSvkr2wJA_DzawiD37
```

## Testing

Once the user is created:
1. Run your development server: `npm run dev`
2. Navigate to the login page
3. Enter the password you set for member@cck.church
4. You should be redirected to `/members`

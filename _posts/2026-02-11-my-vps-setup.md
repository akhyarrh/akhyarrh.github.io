**Note**: not really a post. Just me dumping anything before I forget it.

# My VPS Setup

If first login, **DO THIS, ALWAYS**.

```sh
sudo apt update
sudo apt upgrade
  # preview if anything interesting
  # Y
  # Enter

# setup unatended-upgrade
# (debian only ? I dont know)
```

Lots of stuff hapeened. Really. I started renting (?) a VPS.
Deployed some stuff. Well its just some lightweight app. Without docker.
While that sound crazy, I think docker is too overkill for single binary.
Real challenge is when I have reproduce my current server setup.
So I need reliable backup. Automated. Set and forget. When shit happen,
reconfigure my backup solution, restore. Do check because I hate red.
Redeploy again and have fun.

I will write about some selfhosted stuff later. This time I will
write about how I manage the stuff that handle my server. It just
mostly some common stuff like systemd, nginx, fail2ban, logrotate,
tmux, byobu, mosh, etc.

## Shell

I use SSH most of the time. While shelling from browser do exist,
but my browser is "broken" (Firefox+Arkenfox on pc, Ironfox on mobile).
Not really broken tho, I just dont trust myself using SSH in browser,
or I also dont trust myself running a secure system at all. SSH from
text editor also exist. I just dont like my text editor do almost everything.
Imagine text editor that can talk, chat, run command, change file/dir mode or owner,
browse the web, preview markdown, do git stuff, and most broken thing is gain root privilege
(`sudoedit` enjoyer here).

### SSH

I changed my SSH port from 22 to random port number generated between 10000-59999.
This is intentional, because mosh uses UDP port 60000+ (cant remember).
Yeah SSH is TCP, but separating both on different port make it easier for debugging in case some shit happen.
I dont even remember my SSH port. I just generate it, typed it into `.ssh/config`. Done.
Here the complete template:

```
Host myvps
	Hostname domain.or ip.0.0.1
	User me
	Port XXXXX
	IdentityFile ~/.ssh/my-ssh-key
```
Make sure to use post quantum resistant key (please correct me, I dont know the technical name).
Pub key should begin with string like this `ssh-ed25519 .....`.
To connect just:
```
$ ssh myvps

# or using mosh <3
$ mosh myvps
```
Private key must be in mode 600, pub key can be in mode 644.

`# TODO document tmux, byobu, mosh`.

### Firewall

After partly securing SSH, next is securing origin (in this case, my VPS).
I use `fail2ban`, turn on jail for `sshd`. `fail2ban` is relatively "simple" to understand.
It check log file, filter for specific word, if it exist, ban.
Usually check for a number of failure, then ban whoever do that.
For sshd jail, my configuration are a little bit harsh. `maxretry=3`, `bantime=12h`.

```
# TODO
# my fail2ban jail for sshd here
```

Then I also prepare configuration for my web server. In my setup, I use Nginx.
I also notice Caddy also good, but it just my preference to use Nginx.
Use whatever you are familiar with. For Nginx, I turn on 2 jail:
nginx-auth and nginx-404.

```
# TODO
# nginx auth filter here
```
```
# TODO
# nginx auth jail here
```
```
# TODO
# nginx 404 filter here
```
```
# TODO
# nginx 404 jail here
```
And there is maybe more filter available, but because I use Cloudflare
in front of my server, maybe less bot and spam will hit my origin (?).
Like that ever happen? (believe me, it does happen, just ask port 22).

Next is `ufw` or any firewall (nft, iptables, etc).
For `ufw`, I cant remember the command, but the setup step is simple:

- flush any `ufw` rules
- allow TCP for SSH port
- disallow any ingoing
- allow any outgoing
- enable `ufw`
- allow UDP for mosh (60000-60010 in my setup)
- allow ingoing from Cloudflare IPv4, TCP, port 80/443
- allow ingoing from Cloudflare IPv6, TCP, port 80/443
- allow ingoing from Cloudflare IPv4, UDP, port 443 (quic)
- allow ingoing from Cloudflare IPv6, UDP, port 443 (quic)

This setup pretty much stop mostly 50%+ potential breach (maybe).
For even more hardened setup, use `cloudflared`. So there is no port opened.
Maybe I do this later? Sound good.

### Log management

This is simply just use `logrotate` to do log management daily,
keep last 6 log (or longer), dont run if empty, compress it,
and then tell the program it log is rotated and write to new file.

```
# TODO
# sample logrotate config here
```

## systemd

TBH just curious, is it systemd, systemD, or SystemD ?

The setup in systemd is not much initially, but later when I add
some public facing stuff (nginx, etc), try to contain it as much as possible.
Some basic stuff that I usually do:

```
User
Group
DynamicUser
Directory stuff:
- State
- Configuration
- Logs
- Cache
- Runtime
```

**NOTE**: try to sandbox it as much as possible on first run or do progressive hardening,
error will happen, `strace` and [`shh`](# TODO link to shh) is my friend.
Even if `shh` usually generate a good service configuration, it always good to do test run.
Some shit will happen. It is expected. That is the nature of hardening.

## Common best practice

Last thing is some common best practice:
1. Adopt zero trust, dont event trust myself.
1. DONT use API key inside script directly, save it in `vars.env` and call it key. If the script just used by `root` in cron for example, it mode should 600.
1. Password/secret manager that encrypted, open source, audited (Bitwarden, Keepass, etc).
1. Make a plan how selfhosted app/service structured BEFORE first run. Stick to FHS as much as possible.
1. Backup plan first before planning anything else (this should be in higher priority). [Restic](# TODO link to restic) for examole.
1. Because I dont use docker (its a cheap VPS with 1vcpu, 2gb memory, 60gb ssd), so if able only use an app/service that are lightweight, usually that written in C, C++, go, rust. If single binary not provided, write automated script to keep it updated and runable by cron.
1. # TODO add more stuff here

---

Last updated: 2026-02-11.

akhyarrh.

This specific note, post, doc, whatever,
licensed under Public Domain.

---

Any comment appreciated. Thanks.
